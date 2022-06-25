
var countDownTime = new Date()
countDownTime.setHours( countDownTime.getHours()+2 )

const tractors = [
    {
        id: 0,
        make: 'John Dere',
        model: '',
        typeId: '',
        year: '',
        country: '',
        autionType: { id: 1, description: ''},
        price: '',
        currentBids: 2,
        timeLeft: countDownTime.toDateString(),
        tractorDescription: '',
        imageLink: 'https://i.pinimg.com/564x/00/1f/e8/001fe8a38a4262159d64ee543759c5ef.jpg'
    },
    {
        id: 1,
        make: 'Bombadier',
        model: '',
        typeId: '',
        year: '',
        country: '',
        autionType: { id: 1, description: ''},
        price: '',
        currentBids: 0,
        timeLeft: countDownTime.toDateString(),
        tractorDescription: '',
        imageLink: 'https://i.pinimg.com/564x/34/19/19/341919f2276854e812e1995a51fb382b.jpg'
    },
    {
        id: 2,
        make: 'Apollo',
        model: '454',
        typeId: 4,
        year: '2019',
        country: 'Australia',
        autionType: { id: 1, description: ''},
        price: '1000.00',
        currentBids: 3,
        timeLeft: countDownTime.toDateString(),
        tractorDescription: 'Apollo 454 test test test test tets454 test test test test tets',
        imageLink: 'https://i.pinimg.com/736x/6a/6a/1e/6a6a1ea9b22b40c34fc5698a0318c46d.jpg'
    }
]
 
export default tractors;