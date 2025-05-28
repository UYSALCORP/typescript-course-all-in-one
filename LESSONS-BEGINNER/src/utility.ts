//! Utility Types

// Partial - Objelerin nesnelerini ayırarak güncellemeye yarar.
// Örnek: Bir Assignment nesnesinin sadece grade özelliğini güncellemek için Partial kullanabiliriz.

interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {
        ...assign,
        ...propsToUpdate
    };
}

const assign1: Assignment = {
    studentId: "123",
    title: "Math",
    grade: 85
}

// Örnek kullanım: 1 Property'i güncelleme
console.log(updateAssignment(assign1, { grade: 90 })); // { studentId: '123', title: 'Math', grade: 90 }

// Örnek kullanım: 2 Property'i güncelleme
const assignGraded: Assignment = updateAssignment(assign1, { grade: 90, verified: true });

// Required and Readonly - Bir nesnenin tüm özelliklerini zorunlu hale getirmek veya sadece okunabilir yapmak için kullanılır.

//? All properties of Assignment are required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // Send to database etc.
    return assign;
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true };
recordAssignment({ ...assignGraded, verified: true })

//! MOST POPULAR UTILITY TYPES
//* Record - Bir nesnenin tüm özelliklerini belirli bir türle eşleştirmek için kullanılır.

const hexColorMap: Record<string, string> = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};

type Students = "Alice" | "Bob" | "Charlie";
type LetterGrades = "A" | "B" | "C" | "D" | "F";
// Örnek: Öğrencilerin notlarını saklamak için Record kullanımı
const studentGrades: Record<Students, LetterGrades> = {
    Alice: "A",
    Bob: "B",
    Charlie: "C"
}

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Alice: { assign1: 90, assign2: 85 },
    Bob: { assign1: 80, assign2: 75 },
    Charlie: { assign1: 70, assign2: 65 }
}

// Pick & Omit - Bir nesnenin belirli özelliklerini seçmek veya hariç tutmak için kullanılır.

//* Pick - Belirli özellikleri seçer
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
    studentId: "k123",
    grade: 100
}

//* Omit - Belirli özellikleri hariç tutar.
// Bu örnekte grade ve verified özelliklerini hariç tutuyoruz. Böylece sadece studentId ve title özelliklerini alabiliriz.
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
    studentId: "k124",
    title: "Math Assignment"
}

//* Exclude(Hariç) & Extract(Çıkar)- Bir türden belirli türleri hariç tutmak veya çıkarmak için kullanılır.
// Doesn't work with interfaces, only with types, template literals, union types.

type adjustedGrade = Exclude<LetterGrades, "F">; // Excludes "F" from LetterGrades
type HighGrades = Extract<LetterGrades, "A" | "B">; // Extracts "A" and "B" from LetterGrades

//* NonNullable - Bir türden null ve undefined değerlerini hariç tutar.

type AllPossibleGrades = "Dave" | "Eve" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // Excludes null and undefined, resulting in "Dave" | "Eve"

//* ReturnType - Bir fonksiyonun dönüş türünü elde etmek için kullanılır.
// type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
    return { title, points };
}

type NewAssign = ReturnType<typeof createNewAssign>; // { title: string, points: number }

const tsAssign: NewAssign = createNewAssign("TypeScript Assignment", 100);
console.log(tsAssign); // Output: { title: 'TypeScript Assignment', points: 100 }

//* Parameters - Bir fonksiyonun parametre türlerini elde etmek için kullanılır.

type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["JavaScript Assignment", 95];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2); // Output: { title: 'JavaScript Assignment', points: 95 }

//* Awaited - Bir Promise'in içindeki türü elde etmek için kullanılır.

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => { return res.json() })
        .catch((err) => {
            if (err instanceof Error) console.log(err.message)
        })
    return data
}

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; 
// ReturnType was used to get the return type of fetchUsers, which is Promise<User[] and we used Awaited to get the User[] type. Because fetchUsers is an async function, its return type is a "Promise", and "Awaited" unwraps that Promise to give us the "User[]"" type.>

fetchUsers().then((users) => console.log(users)) 
// Output: Array of User objects
