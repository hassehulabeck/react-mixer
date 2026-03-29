// Present but not yet mixed
const present = students.filter(s => s.isPresent && !s.pairId);
// Not present
const absent = students.filter(s => !s.isPresent);
// Mixed pairs
const mixed = students.filter(s => s.pairId !== null);


function mixStudents() {
  const presentStudents = students.filter(s => s.isPresent);

  const shuffled = [...presentStudents].sort(() => Math.random() - 0.5);

  let pair = 1;

  const updated = shuffled.map((student, index) => {
    if (index % 2 === 0 && index !== 0) pair++;
    return { ...student, pairId: pair };
  });

  setStudents(prev =>
    prev.map(s => updated.find(u => u.id === s.id) || s)
  );
}