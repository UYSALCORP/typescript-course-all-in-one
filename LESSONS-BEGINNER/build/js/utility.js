"use strict";
//! Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "123",
    title: "Math",
    grade: 85
};
// Örnek kullanım: 1 Property'i güncelleme
console.log(updateAssignment(assign1, { grade: 90 })); // { studentId: '123', title: 'Math', grade: 90 }
// Örnek kullanım: 2 Property'i güncelleme
const assignGraded = updateAssignment(assign1, { grade: 90, verified: true });
// Required and Readonly - Bir nesnenin tüm özelliklerini zorunlu hale getirmek veya sadece okunabilir yapmak için kullanılır.
//? All properties of Assignment are required
const recordAssignment = (assign) => {
    // Send to database etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//! MOST POPULAR UTILITY TYPES
//* Record - Bir nesnenin tüm özelliklerini belirli bir türle eşleştirmek için kullanılır.
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};
// Örnek: Öğrencilerin notlarını saklamak için Record kullanımı
const studentGrades = {
    Alice: "A",
    Bob: "B",
    Charlie: "C"
};
const gradeData = {
    Alice: { assign1: 90, assign2: 85 },
    Bob: { assign1: 80, assign2: 75 },
    Charlie: { assign1: 70, assign2: 65 }
};
const score = {
    studentId: "k123",
    grade: 100
};
const preview = {
    studentId: "k124",
    title: "Math Assignment"
};
//* ReturnType - Bir fonksiyonun dönüş türünü elde etmek için kullanılır.
// type newAssign = {title: string, points: number};
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("TypeScript Assignment", 100);
console.log(tsAssign); // Output: { title: 'TypeScript Assignment', points: 100 }
const assignArgs = ["JavaScript Assignment", 95];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2); // Output: { title: 'JavaScript Assignment', points: 95 }
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => { return res.json(); })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
// ReturnType was used to get the return type of fetchUsers, which is Promise<User[] and we used Awaited to get the User[] type. Because fetchUsers is an async function, its return type is a "Promise", and "Awaited" unwraps that Promise to give us the "User[]"" type.>
fetchUsers().then((users) => console.log(users));
// Output: Array of User objects
