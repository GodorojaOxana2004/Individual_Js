## Инструкции по запуску программы

1. Скопируйте предоставленный код и сохраните его в файле с расширением `.js`.
2. Убедитесь, что у вас установлена среда выполнения JavaScript, например, Node.js.
3. Откройте терминал или командную строку.
4. Перейдите в каталог, где находится ваш файл с кодом.
5. Запустите файл с помощью команды `node название_файла.js`.


## Описание индивидуальной работы

Этот проект представляет собой класс `TransactionAnalyzer`, предназначенный для анализа массива транзакций. Он включает следующие методы:

1. Добавление новых транзакций.
2. Получение различной статистики по транзакциям.
3. Фильтрация транзакций по различным критериям.


## Краткая документация к индивидуальной работе

`TransactionAnalyzer` - это класс, который принимает массив транзакций и предоставляет методы для анализа этих транзакций. Методы включают добавление новых транзакций, получение всех транзакций, вычисление общей суммы транзакций и многое другое.

```javascript
// Создание экземпляра класса TransactionAnalyzer
const transactionAnalyzer = new TransactionAnalyzer(transactions);

// Получение всех транзакций
console.log(transactionAnalyzer.getAllTransactions());

// Добавление новой транзакции
transactionAnalyzer.addTransaction("2024-03-23", 50.0, "debit", "Grocery shopping", "Grocery Store", "Visa");

// Получение уникальных типов транзакций
console.log(transactionAnalyzer.getUniqueTransactionType());

// Вычисление общей суммы транзакций
console.log(transactionAnalyzer.calculateTotalAmount());

// Вычисление общей суммы транзакций по дате
console.log(transactionAnalyzer.calculateTotalAmountByDate("2024", "03", "23"));

// Получение транзакций определенного типа
console.log(transactionAnalyzer.getTransactionByType("debit"));

// Получение транзакций в заданном диапазоне дат
console.log(transactionAnalyzer.getTransactionsInDateRange("2024-03-01", "2024-03-31"));

// Получение транзакций по имени продавца
console.log(transactionAnalyzer.getTransactionsByMerchant("Grocery Store"));

// Вычисление средней суммы транзакций
console.log(transactionAnalyzer.calculateAverageTransactionAmount());

// Получение транзакций в заданном диапазоне сумм
console.log(transactionAnalyzer.getTransactionsByAmountRange(10, 100));

// Вычисление общей суммы дебетовых транзакций
console.log(transactionAnalyzer.calculateTotalDebitAmount());

// Нахождение месяца с наибольшим количеством транзакций
console.log(transactionAnalyzer.findMostTransactionsMonth());

// Нахождение месяца с наибольшим количеством дебетовых транзакций
console.log(transactionAnalyzer.findMostDebitTransactionMonth());

// Определение типа транзакции с наибольшим количеством операций
console.log(transactionAnalyzer.mostTransactionTypes());

// Получение транзакций, совершенных до указанной даты
console.log(transactionAnalyzer.getTransactionsBeforeDate("2024-03-20"));

// Нахождение транзакции по ID
console.log(transactionAnalyzer.findTransactionById('5'));

// Возвращает описания всех транзакций
console.log(transactionAnalyzer.mapTransactionDescriptions());
```

## Контрольные вопросы

1. **Какие примитивные типы данных существуют в JavaScript?**
   - Numbers - Включают целые числа и числа с плавающей запятой.
   - Strings - Последовательности символов, заключенные в кавычки.
   - Boolean - true и false.
   - Undefined - Значение, которое имеет переменная, если ей не было присвоено значение.
   - Null - Отдельный тип, имеющий единственное значение null.
   - Symbols - Уникальные и неизменяемые значения, которые могут использоваться как ключи для свойств объектов.

2. **Какие методы массивов вы использовали для обработки и анализа данных в вашем приложении, и как они помогли в выполнении задачи?**
   - map() - Создает новый массив, применяя функцию к каждому элементу исходного массива.
   - forEach() -  Выполняет указанную функцию один раз для каждого элемента массива.

3. **В чем состоит роль конструктора класса?**
   Конструктор класса в JavaScript выполняет инициализацию новых объектов, устанавливая начальные значения свойств и подготавливая объекты к использованию. Он принимает аргументы для инициализации и использует ключевое слово this для ссылки на текущий экземпляр объекта. Конструктор вызывается при создании нового объекта с помощью оператора new.

4. **Каким образом вы можете создать новый экземпляр класса в JavaScript?**
   ```javascript
   class Human {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
   }
   const person1 = new Human('Катя', 28);

5. **Список использованных источников**

- MDN Web Docs
- JavaScript.info
- W3Schools
- Stack Overflow

6. **Дополнительные важные аспекты**

В коде есть некоторые комментарии, которые помогают понять, какие операции выполняются в каждом методе.

