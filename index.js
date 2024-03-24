const transactions_ = require('./transactions.json');

for(let i = 0; i < transactions_.length - 1;i++){ // В каждую транзакцию необходимо добавить метод string()
    transactions_[i].string = function string() {
        return JSON.stringify(this); //JSON.stringify — для преобразования объектов в JSON.
    }
}

class TransactionAnalyzer {
      /**
     * Создает новый экземпляр TransactionAnalyzer.
     * @param {Array} transactions - Массив транзакций.
     */
    constructor(transactions_) {
        this.transactions = transactions_;
    }

    /**
     * Добавляет новую транзакцию.
     * @param {string} transaction_date - Дата транзакции.
     * @param {number} transaction_amount - Сумма транзакции.
     * @param {string} transaction_type - Тип транзакции.
     * @param {string} transaction_description - Описание транзакции.
     * @param {string} merchant_name - Имя продавца.
     * @param {string} card_type - Тип карты.
     */

    addTransaction(transaction_date, transaction_amount, transaction_type, transaction_description, merchant_name, card_type) {

        let transaction_id = String(Number(this.transactions[this.transactions.length-1].transaction_id)+1);

        const transaction = {
            transaction_id: transaction_id,
            transaction_date: transaction_date,
            transaction_amount: transaction_amount,
            transaction_type: transaction_type,
            transaction_description: transaction_description,
            merchant_name: merchant_name,
            card_type: card_type,   
            string: function string() {
                return JSON.stringify(this);
            }
        }

        this.transactions.push(transaction);
    }

       /**
     * Возвращает все транзакции.
     * @return {Array} Массив всех транзакций.
     */
    getAllTransactions() {
        return this.transactions;
    }

      /**
     * Возвращает типы транзакций.
     * @return {Set} Множество типов транзакций.
     */

    getUniqueTransactionType(){
        let uniquetypes = new Set()
        for(let i = 0; i < this.transactions.length - 1;i++){
            uniquetypes.add(this.transactions[i].transaction_type);
        }
        return uniquetypes;
    }

     /**
     * Вычисляет общую сумму транзакций.
     * @return {number} Общая сумма транзакций.
     */

    calculateTotalAmount(){
        let total=0;
        for(let i = 0; i < this.transactions.length - 1;i++){
            total += this.transactions[i].transaction_amount;
        }
        return total;
    }

    /**
     * Вычисляет общую сумму транзакций по дате.
     * @param {string} year - Год.
     * @param {string} month - Месяц.
     * @param {string} day - День.
     * @return {number} Общая сумма транзакций по дате.
     */

    calculateTotalAmountByDate(year, month, day){
        let date;
        let total1=0;
        for(let i = 0; i < (this.transactions.length - 1);i++){
            date = this.transactions[i].transaction_date.split("-");
            let year1= date[0];
            let month1= date[1];
            let day1= date[2];
            if (((year1===year) || !year) && ((month1 === month) || (!month)) && ( (day1===day) || !day)){
                total1 += this.transactions[i].transaction_amount;
            } /*else if ((year1===year) && (month1 === month)){
                total1 += transactions[i].transaction_amount;
            } else if ((month1 === month) && ( day1===day)){
                total1 += transactions[i].transaction_amount;
            } else if ((year1===year) && ( day1===day)){
                total1 += transactions[i].transaction_amount;
            }else if (year===year1){
                total1 += transactions[i].transaction_amount;
            } else if (month1===month){
                total1 += transactions[i].transaction_amount;
            } else if (day===day1) {
                total1 += transactions[i].transaction_amount;
            }*/
        }
        return total1;
    }

    /**
     * Возвращает транзакции по типу.
     * @param {string} type - Тип транзакции.
     * @return {Set} Множество транзакций данного типа.
     */

    getTransactionByType(type){
        let set1 = new Set();
        for(let i = 0; i < this.transactions.length - 1;i++){
           if (type === this.transactions[i].transaction_type ){
            set1.add(this.transactions[i]);
           }
        } 
        return set1;
    }

     /**
     * Возвращает транзакции в заданном диапазоне дат.
     * @param {string} startDate - Начальная дата.
     * @param {string} endDate - Конечная дата.
     * @return {Set} Множество транзакций в заданном диапазоне дат.
     */

    getTransactionsInDateRange(startDate, endDate){
        let set = new Set();
        
        for (let i = 0; i < this.transactions.length-1; i++) {
            let rangetrans = this.transactions[i].transaction_date;
            if (startDate<=rangetrans && endDate>=rangetrans){
                set.add(this.transactions[i]);
            }
        
    }return set;
    
}

    /**
     * Возвращает транзакции по имени продавца.
     * @param {string} merchantName - Имя продавца.
     * @return {Set} Множество данного продавца.
     */

getTransactionsByMerchant(merchantName){
    let set = new Set();
    for(let i = 0; i < this.transactions.length - 1;i++){
        let name = this.transactions[i].merchant_name;
        if ( name === merchantName){
            set.add(this.transactions[i]);
        }
     }  return set;
}

    /**
     * Вычисляет среднюю сумму транзакций.
     * @return {number} Средняя сумма транзакций.
     */
calculateAverageTransactionAmount(){
    let sred_znak=0;
    let amount=transactions.length;
    let total=0;
    for(let i = 0; i < this.transactions.length - 1;i++){
        total += this.transactions[i].transaction_amount;
    }
    sred_znak = total/amount;
    return sred_znak;

}

/**
     * Возвращает транзакции в заданном диапазоне сумм.
     * @param {number} minAmount - Минимальная сумма.
     * @param {number} maxAmount - Максимальная сумма.
     * @return {Set} Множество транзакций в заданном диапазоне сумм.
     */
//нужно проверить

getTransactionsByAmountRange(minAmount, maxAmount) {
    let totalAmount = 0;

    for (let i = 0; i < this.transactions.length-1; i++) {
        let amount = this.transactions[i].transaction_amount;
        if (amount >= minAmount && amount <= maxAmount) {

            totalAmount += amount; 
        }
    }

    return totalAmount;
}

 /**
     * Вычисляет общую сумму дебетовых транзакций.
     * @return {number} Общая сумма дебетовых транзакций.
     */

calculateTotalDebitAmount(){
    let totalDebitAmount = 0;

    for(let i = 0; i < this.transactions.length - 1;i++){
       if (this.transactions[i].transaction_type === 'debit') {
        totalDebitAmount += this.transactions[i].transaction_amount;
    }
} return totalDebitAmount
    } 

    /**
     * Находит месяц с наибольшим количеством транзакций.
     * @return {number} Месяц с наибольшим количеством транзакций.
     */
findMostTransactionsMonth(){
        let maxTransactionsAmountCurr = 0;
        let maxTransactionsAmountLast = 0;
        let mostTransactionsMonth = 0;
        let last_month = 0;

        for (let i = 0; i < this.transactions.length - 1; i++){
            let date1 = this.transactions[i].transaction_date.split("-");
            let month = Number(date1[1]);
            
            if (last_month === month) { // проверям, если в предыдущий день был тот же месяц
                maxTransactionsAmountCurr++;
            }
            else if(maxTransactionsAmountLast > maxTransactionsAmountCurr){ // проверяем, если за предыдущий месяц было больше тр. чем за нынешний
                maxTransactionsAmountCurr = 0;
            }
            else{ // если за нынешний было больше, чем за предыдущий, обнавляем месяц в котором больше всего транзакций
                mostTransactionsMonth = month - 1;
                maxTransactionsAmountLast = maxTransactionsAmountCurr;
                maxTransactionsAmountCurr = 1;
            }
            last_month = Number(date1[1]);
        }
        return mostTransactionsMonth;
        }

    /**
     * Возвращает месяц, в котором было больше дебетовых транзакций
     * @return {number} Месяц с наибольшим количеством транзакций.
     */
findMostDebitTransactionMonth(){
        let maxDebitAmountCurr = 0;
        let maxDebitAmountLast = 0;
        let mostTransactionsMonth = 0;
        let last_month = 0;
        for (let i = 0; i < this.transactions.length - 1; i++){
            let date1 = this.transactions[i].transaction_date.split("-");
            let month = Number(date1[1]);
            
            if (last_month === month) { // проверям, если в предыдущий день был тот же месяц
                if(this.transactions[i].transaction_type === 'debit'){
                    maxDebitAmountCurr++;
                }
            }
            else if(maxDebitAmountLast > maxDebitAmountCurr){// проверяем, если за предыдущий месяц было больше тр. чем за нынешний
                maxDebitAmountCurr = 0;
            }
            else{ // если за нынешний было больше, чем за предыдущий, обнавляем месяц в котором больше всего транзакций
                mostTransactionsMonth = month - 1;
                maxDebitAmountLast = maxDebitAmountCurr;
                if(this.transactions[i].transaction_type === 'debit'){
                    maxDebitAmountCurr = 1;
                }
                else{
                    maxDebitAmountCurr = 0;
                }
            }
            last_month = Number(date1[1]);
        }
    
        return mostTransactionsMonth;
        }

         /**
        * Определяет тип транзакции с наибольшим количеством операций.
         * @return {string} Тип транзакции с наибольшим количеством операций.
         */

        mostTransactionTypes(){
            let debitCount = 0;
            let creditCount = 0;
            for (let i = 0; i < this.transactions.length - 1; i++) {
                if (this.transactions[i].transaction_type == 'debit') {
                    debitCount++;
                } else if (this.transactions[i].transaction_type  == 'credit') {
                    creditCount++;
                }
            }
            
            if (debitCount > creditCount) {
                return 'debit';
            } else if (creditCount > debitCount) {
                return 'credit';
            } else {
                return 'equal';
            }
        }

        /**
        * Возвращает транзакции, совершенные до указанной даты.
        * @param {string} date - Дата.
        * @return {Array} Массив транзакций, совершенных до указанной даты.
        */
getTransactionsBeforeDate(date){
    
            let result = [];
            let targetDate = new Date(date);
            //console.log(targetDate);
            for (let transact of this.transactions) {
                let transactionDate = new Date(this.transactions.transaction_date);
                if (transactionDate < targetDate) {
                    result.push(transact);
                }
            }
            return result;
        }

    /**
     * Находим транзакцию по ID.
     * @param {string} id - ID транзакции.
     * @return {Object} Транзакция с указанным ID.
     */

findTransactionById(id){
            for (let i = 0; i < this.transactions.length - 1; i++) {
            if (id === this.transactions[i].transaction_id){
                return this.transactions[i];
            }}
        }

        /** 
        * Возвращает описания всех транзакций.
        * @return {Array} Массив описаний всех транзакций.
        */

mapTransactionDescriptions(){
    let descript = []; // Создаем пустой массив для хранения описаний транзакций

// Проходим по каждой транзакции
for (let i = 0; i < this.transactions.length - 1; i++) {
    // Проверяем, есть ли у текущей транзакции описание
    if (this.transactions[i].transaction_description) {
        descript.push(this.transactions[i].transaction_description); // Добавляем описание в массив
    }

}
return descript; // Возвращаем массив описаний
};
}





// для проверки
const transactionAnalyzer1 = new TransactionAnalyzer(transactions);

console.log(transactionAnalyzer1.getAllTransactions());

//transactionAnalyzer1.addTransaction("2424244",125.0, "debit" );
//console.log(transactionAnalyzer1.transactions[transactions.length - 1]);
//console.log(transactionAnalyzer1.getUniqueTransactionType());
//console.log(transactionAnalyzer1.calculateTotalAmount());
//console.log(transactionAnalyzer1.calculateTotalAmountByDate("","01",""));
//console.log(transactionAnalyzer1.getTransactionByType("credit"));
//console.log(transactionAnalyzer1.getTransactionsInDateRange("2019-01-05","2019-02-12"));
//console.log(transactionAnalyzer1.getTransactionsByMerchant("BankXYZ"));
//console.log(transactionAnalyzer1.calculateAverageTransactionAmount());
//console.log(transactionAnalyzer1.getTransactionsByAmountRange(50, 100));
//console.log(transactionAnalyzer1.calculateTotalDebitAmount());
//console.log(transactionAnalyzer1.findMostTransactionsMonth());
//console.log(transactionAnalyzer1.findMostDebitTransactionMonth());
//console.log(transactionAnalyzer1.mostTransactionTypes());
console.log(transactionAnalyzer1.getTransactionsBeforeDate("2019-01-05"));
//console.log(transactionAnalyzer1.findTransactionById('5'));
//console.log(transactionAnalyzer1.mapTransactionDescriptions());


// const masiv = [book, apple, macbook]
//                  0     1       2
// masiv.lenght = 3
// masiv[masiv.lenght - 1]

