const {createApp, computed} = Vue

createApp({
    setup() {

    },
    methods: {
        formatMoney(money) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
            }).format(money);
        },
        increaseQuantity(id) {
            this.menuList[id].quantity++;
            this.calculateTotal()
        },
        decreaseQuantity(id) {
            if (this.menuList[id].quantity > 0) {
                this.menuList[id].quantity--;
                this.calculateTotal()
            }
        },
        calculateTotal() {
            let subTotal = 0;
            for (const id in this.menuList) {
                subTotal += this.menuList[id].quantity * this.menuList[id].price;
            }
            this.subTotal = subTotal;
            this.total = subTotal + this.feeShip - this.discount;
        }
    },
    data() {
        return {
            menuList: {
                1: {
                    name: 'Bánh Tráng Trộn',
                    imageUrl: 'https://storage.googleapis.com/a1aa/image/EL5cB-64TIOi2CtsaIZx-lIBqQdexrRXjXL6h38LSXI.jpg',
                    price: 20000,
                    quantity: 0
                },
                2: {
                    name: 'Bánh Tráng Chấm',
                    imageUrl: 'https://storage.googleapis.com/a1aa/image/EL5cB-64TIOi2CtsaIZx-lIBqQdexrRXjXL6h38LSXI.jpg',
                    price: 15000,
                    quantity: 0
                },
                3: {
                    name: 'Bánh Tráng Muối',
                    imageUrl: 'https://storage.googleapis.com/a1aa/image/EL5cB-64TIOi2CtsaIZx-lIBqQdexrRXjXL6h38LSXI.jpg',
                    price: 9000,
                    quantity: 0
                },
                4: {
                    name: 'Bánh Gấu',
                    imageUrl: 'https://storage.googleapis.com/a1aa/image/EL5cB-64TIOi2CtsaIZx-lIBqQdexrRXjXL6h38LSXI.jpg',
                    price: 45000,
                    quantity: 0
                }
            },
            total: 0,
            subTotal: 0,
            feeShip: 0,
            discount: 0,
        }
    }
}).mount('#app')