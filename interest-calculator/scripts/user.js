// implementing user object that will store a specific user's data for future use
// (storing, retrieving, reporting)
const user = {
    _name: 'John Doe',
    _accounts: [],
    get name() {
        return this._name;
    },
    get accounts() {
        return this._accounts;
    },
    /**
     * @param {string} newName
     */
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log('Type Error: Name must be a string.');
        }
    },
    numOfAccounts() {
        if (this.accounts.length) {
            return this.accounts.length;
        } else {
            return "This user currently doesn't have an account";
        }
    },
    /**
     * @param {string} name 
     * @param {number} amount
     */
    addAccount(name, amount) {
        const newAccount = {
            name,
            amount
        };
        this.accounts.push(newAccount);
    }
};

// TEST: add different accounts for the user
user.addAccount('Savings', 50000);
user.addAccount('Checking', 20000);
user.addAccount('Brokerage2', 88550);

user.accounts.forEach(element => {
    console.log(`
        Name: ${element.name}
        Value: ${element.amount}
    `);
});