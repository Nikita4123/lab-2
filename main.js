const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Средний балл группы
function calculateAverage(data) {
    if (data.length === 0) {
        return 0;
    }

    const total = data.reduce(
        (sum, student) => sum + student.score,
        0
    );

    return total / data.length;
}

// Имя студента с максимальным баллом
function findTopStudent(data) {
    if (data.length === 0) {
        return null;
    }

    let topStudent = data[0];

    for (const student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }

    return topStudent.name;
}

// Имена студентов, не набравших проходной балл
function filterFailed(data, passScore) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}

// Добавление буквенных оценок
function addLetterGrade(data) {
    return data.map(student => {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        return {
            ...student,
            letter
        };
    });
}

// Демонстрация работы всех функций
console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Список должников:", filterFailed(grades, 60));
console.log("Итоговый массив с буквенными оценками:");
console.log(addLetterGrade(grades));