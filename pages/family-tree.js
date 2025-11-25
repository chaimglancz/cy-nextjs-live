import { useState, useEffect } from 'react';
import { cySupabase } from '../supabase';

export default function FamilyTree() {
  const [cyFamilyMembers, setCyFamilyMembers] = useState([]);

  useEffect(() => {
    fetchFamilyMembers();
  }, []);

  const fetchFamilyMembers = async () => {
    const { data, error } = await cySupabase
      .from('family_members')
      .select('*');
    
    if (error) {
      console.error('Error:', error);
    } else {
      setCyFamilyMembers(data);
    }
  };

  const organizeByGenerations = () => {
    const peopleMap = {};
    cyFamilyMembers.forEach(person => {
      peopleMap[person.id] = person;
    });

    const focusPerson = cyFamilyMembers.find(p => p.name === 'Chaim Glancz');
    if (!focusPerson) return {};

    // Find spouse (shares children with focus person)
    const spouse = cyFamilyMembers.find(person => 
      person.id !== focusPerson.id && 
      cyFamilyMembers.some(child => 
        (child.father_id === focusPerson.id && child.mother_id === person.id) ||
        (child.mother_id === focusPerson.id && child.father_id === person.id)
      )
    );

    const generations = {};
    const personPositions = new Map();

    // Generation 2: Start with you and spouse (second to last row)
    generations[2] = [];
    generations[2][0] = spouse || null; // Wife on left
    generations[2][1] = focusPerson;    // Husband on right
    
    if (spouse) personPositions.set(spouse.id, { generation: 2, position: 0 });
    personPositions.set(focusPerson.id, { generation: 2, position: 1 });

    // Function to add parents above a person
    const addParentsAbove = (person, childGeneration, childPosition) => {
      if (!person || (!person.father_id && !person.mother_id)) return;
      
      const parentGeneration = childGeneration + 1;
      if (!generations[parentGeneration]) generations[parentGeneration] = [];
      
      // Calculate parent positions (directly above child)
      const motherPos = childPosition * 2;     // Mother to the left
      const fatherPos = childPosition * 2 + 1; // Father to the right
      
      // Add mother
      if (person.mother_id && peopleMap[person.mother_id]) {
        const mother = peopleMap[person.mother_id];
        generations[parentGeneration][motherPos] = mother;
        personPositions.set(mother.id, { generation: parentGeneration, position: motherPos });
      }
      
      // Add father  
      if (person.father_id && peopleMap[person.father_id]) {
        const father = peopleMap[person.father_id];
        generations[parentGeneration][fatherPos] = father;
        personPositions.set(father.id, { generation: parentGeneration, position: fatherPos });
      }
    };

    // Add parents for focus person and spouse
    addParentsAbove(focusPerson, 2, 1);
    if (spouse) addParentsAbove(spouse, 2, 0);

    // Recursively add grandparents, great-grandparents, etc.
    for (let gen = 3; gen <= 6; gen++) {
      if (!generations[gen]) break;
      
      generations[gen].forEach((person, position) => {
        if (person) {
          addParentsAbove(person, gen, position);
        }
      });
    }
    // Add children below focus person
    const children = cyFamilyMembers.filter(person => 
      person.father_id === focusPerson.id || person.mother_id === focusPerson.id
    );
    
    if (children.length > 0) {
      generations[1] = children; // All children in one row
    }

    // Fill empty boxes to complete pyramid structure
    const boxCounts = { 6: 32, 5: 16, 4: 8, 3: 4, 2: 2, 1: children.length || 1 };
    
    Object.keys(generations).forEach(gen => {
      const genNum = parseInt(gen);
      const targetCount = boxCounts[genNum] || Math.max(generations[gen]?.length || 0, 1);
      
      if (!generations[gen]) generations[gen] = [];
      
      // Fill empty positions with grey boxes (except children row)
      if (genNum !== 1) {
        for (let i = 0; i < targetCount; i++) {
          if (!generations[gen][i]) {
            generations[gen][i] = { id: `empty-${gen}-${i}`, name: '', gender: '', isEmpty: true };
          }
        }
      }
    });

    return generations;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Glancz Family Tree</h1>
      
      <div className="max-w-6xl mx-auto">
        {Object.keys(organizeByGenerations()).sort((a, b) => b - a).map(generation => {
          const people = organizeByGenerations()[generation];
          if (!people || people.length === 0) return null;
          
          // Updated box counts: 16-8-4-2-[children]
          const boxCounts = { 6: 32, 5: 16, 4: 8, 3: 4, 2: 2, 1: people.length };
          const boxCount = boxCounts[generation] || people.length;
          
          return (
            <div key={generation}>
              <div className="mb-8">
                <div className={`grid gap-4 justify-center`} 
                     style={{gridTemplateColumns: `repeat(${boxCount}, 1fr)`}}>
                  {people.slice(0, boxCount).map((person, index) => (
                    <div key={person?.id || `empty-${generation}-${index}`} className={`p-4 rounded-lg shadow text-center ${person?.isEmpty ? 'bg-gray-200 border-2 border-dashed border-gray-400' : 'bg-white'}`}>
                      <h3 className="font-semibold">{person?.name || ''}</h3>
                      <p className="text-gray-600">{person?.gender || ''}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Add line across page before children row */}
              {generation === '2' && (
                <div className="mb-6">
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <p className="text-center text-gray-600 text-sm mt-2">Children</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}