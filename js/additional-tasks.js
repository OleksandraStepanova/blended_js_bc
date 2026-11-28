/* Task-1 */
// Напишіть функцію checkEmail(email), яка перевіряє,
// чи містить переданий рядок символ @.
// Якщо містить — повернути "Email is valid".
// В іншому випадку — "Invalid email".
//
// console.log(checkEmail("user@gmail.com")) // "Email is valid"
// console.log(checkEmail("usergmail.com")) // "Invalid email"

/* Task-2 */
// Створіть функцію getFileExtension(filename),
// яка повертає розширення файлу.
// Якщо файл не має розширення — повернути "No extension".
//
// console.log(getFileExtension("photo.jpg")) // "jpg"
// console.log(getFileExtension("document.pdf")) // "pdf"
// console.log(getFileExtension("README")) // "No extension"

/* Task-3 */
// Напишіть функцію getInitials(fullName),
// яка приймає ім'я та прізвище користувача
// і повертає його ініціали.
//
// console.log(getInitials("Anna Smith")) // "A.S."
// console.log(getInitials("John Brown")) // "J.B."

/* Task-4 */
// Напишіть функцію checkPassword(password),
// яка перевіряє довжину пароля.
// Якщо пароль містить 8 або більше символів — повернути
// "Strong enough".
// В іншому випадку — "Password is too short".
//
// console.log(checkPassword("javascript")) // "Strong enough"
// console.log(checkPassword("hello")) // "Password is too short"

/* Task-5 */
// Напишіть функцію getFirstAndLastChar(string),
// яка повертає перший та останній символ рядка.
//
// console.log(getFirstAndLastChar("JavaScript")) // "Jt"
// console.log(getFirstAndLastChar("Hello")) // "Ho"

/* Task-6 */
// Створіть функцію getRandomColor(), яка повертає
// випадковий колір з масиву:
//
// const colors = ["red", "green", "blue", "yellow", "purple"];
//
// Кожного разу функція повинна повертати випадковий елемент.

/* Task-7 */
// Є масив покупок:
//
// const shoppingList = ["bread", "milk", "eggs", "cheese"];
//
// Напишіть функцію addProduct(list, product),
// яка додає новий товар у кінець списку
// та повертає оновлений масив.
//
// addProduct(shoppingList, "butter")
// ["bread", "milk", "eggs", "cheese", "butter"]

/* Task-8 */
// Напишіть функцію capitalizeWords(words),
// яка приймає масив слів та повертає новий масив,
// у якому кожне слово починається з великої літери.
//
// const words = ["hello", "world", "javascript"];
//
// console.log(capitalizeWords(words))
// ["Hello", "World", "Javascript"]

/* Task-9 */
// Напишіть функцію countOccurrences(array, value),
// яка підраховує, скільки разів передане значення
// зустрічається в масиві.
//
// const fruits = ["apple", "banana", "apple", "orange", "apple"];
//
// console.log(countOccurrences(fruits, "apple")) // 3
// console.log(countOccurrences(fruits, "banana")) // 1

/* Task-10 */
// Напишіть функцію mergeArrays(arr1, arr2),
// яка об'єднує два масиви в один.
// Але однакові елементи повинні зустрічатися лише один раз.
//
// console.log(mergeArrays([1, 2, 3], [3, 4, 5]))
// [1, 2, 3, 4, 5]

/* Task-11 */
// Є масив кімнат готелю:
//
// const hotel = [
//   ["free", "busy", "free"],
//   ["busy", "busy", "free"],
//   ["free", "free", "free"]
// ];
//
// Напишіть функцію countFreeRooms(hotel),
// яка підраховує загальну кількість вільних кімнат.
// Використайте вкладені цикли.
//
// Результат: 6

/* Task-12 */
//
// Напиши функцію findActivities(activities, freeTime),
// яка повертає масив активностей, на які вистачить часу.
//
// const activities = [
//   "Swimming - 1 hour",
//   "Cycling - 3 hours",
//   "Hiking - 5 hours",
//   "Running - 2 hours",
//   "Kayaking - 4 hours"
// ];
//
// const freeTime = 3;
