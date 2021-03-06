
var countDownTime = new Date()
countDownTime.setHours( countDownTime.getHours()+2 )


var newcountDownTime = new Date()
newcountDownTime.setHours( countDownTime.getHours()+6 )

const tractors = [
    {
        id: 0,
        make: 'John Dere',
        model: '7R 230',
        typeId: 5,
        conditionId: 1,
        year: '2019',
        country: { description: 'USA', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'},
        autionType: { id: 1, description: 'English Auction'},
        price: 246,
        currentBids: 2,
        timeLeft: newcountDownTime.toISOString(),
        tractorDescription: 'John Dere 7R 230',
        imageLink: 'https://www.tractordata.com/photos/F010/10626/10626-td4-b01-ext270.jpg'
    },
    {
        id: 1,
        make: 'Bobcat',
        model: 'MPV-20',
        typeId: 3,
        conditionId: 0,
        year: '2013',
        country: { description: 'South Korea', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png'},
        autionType: { id: 2, description: 'Dutch Aution'},
        price: 451268.215,
        currentBids: 0,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'Bobcat MPV-20',
        imageLink: 'https://www.tractordata.com/photos/F005/5570/5570-td4-b01.jpg'
    },
    {
        id: 2,
        make: 'Apollo',
        model: '454',
        typeId: 4,
        conditionId: 2,
        year: '2019',
        country: { description: 'Australia', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'},
        autionType: { id: 1, description: 'English Auction'},
        price: 1000.0093,
        currentBids: 3,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'Apollo 454',
        imageLink: 'https://www.tractordata.com/photos/F007/7361/7361-td4-b01.jpg'
    },
    {
        id: 3,
        make: 'Bobcat',
        model: 'CT450',
        typeId: 3,
        conditionId: 0,
        year: '2013',
        country: { description: 'South Korea', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png'},
        autionType: { id: 2, description: 'Dutch Auction'},
        price: 45000.215,
        currentBids: 0,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'Bobcat CT450',
        imageLink: 'https://www.tractordata.com/photos/F006/6427/6427-td4-b01.jpg'
    },
    {
        id: 4,
        make: 'John Dere',
        model: '8R 280',
        typeId: 5,
        conditionId: 1,
        year: '2019',
        country: { description: 'USA', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'},
        autionType: { id: 2, description: 'Dutch Auction'},
        price: 299109,
        currentBids: 0,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'John Dere 8R 280',
        imageLink: 'https://www.tractordata.com/photos/F010/10635/10635-td4-b01.jpg'
    },
    {
        id: 5,
        make: 'John Dere',
        model: '8R 340',
        typeId: 5,
        conditionId: 0,
        year: '2020',
        country: { description: 'USA', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'},
        autionType: { id: 2, description: 'English Auction'},
        price: 408496,
        currentBids: 2,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'John Dere 8R 340',
        imageLink: 'https://www.tractordata.com/photos/F010/10638/10638-td4-b01-ext315.jpg'
    },
    {
        id: 6,
        make: 'John Dere',
        model: '3035D',
        typeId: 4,
        conditionId: 2,
        year: '2021',
        country: { description: 'USA', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'},
        autionType: { id: 2, description: 'English Auction'},
        price: 16690,
        currentBids: 6,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'John Dere 3035D',
        imageLink: 'https://www.tractordata.com/photos/F010/10314/10314-td4-b01.jpg'
    },
    {
        id: 7,
        make: 'Leyland',
        model: '154',
        typeId: 4,
        conditionId: 0,
        year: '1984',
        country: { description: 'United Kingdom', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png'},
        autionType: { id: 2, description: 'Dutch Auction'},
        price: 8300,
        currentBids: 0,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'Leyland 154',
        imageLink: 'https://www.tractordata.com/photos/F001/1087/1087-td4-b01.jpg'
    },
    {
        id: 8,
        make: 'Zetor',
        model: 'Crystal 170 HD',
        typeId: 5,
        conditionId: 1,
        year: '2018',
        country: { description: 'Czech Republic', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png'},
        autionType: { id: 2, description: 'English Auction'},
        price: 0.00,
        currentBids: 0,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'Zetor Crystal 170 HD',
        imageLink: 'https://www.tractordata.com/photos/F010/10879/10879-td4-b01.jpg'
    },
    {
        id: 9,
        make: 'Sonalike',
        model: 'DI-75',
        typeId: 2,
        conditionId: 0,
        year: '2016',
        country: { description: 'India', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png'},
        autionType: { id: 2, description: 'English Auction'},
        price: 0,
        currentBids: 0,
        timeLeft: countDownTime.toISOString(),
        tractorDescription: 'Sonalike DI-75',
        imageLink: null
    },
]
 
export default tractors;