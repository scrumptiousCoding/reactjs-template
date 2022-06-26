const storeObject = {
    categories: [
        {id: 1, description: 'Lawn tractor'},
        {id: 2, description: 'Sub-compact tractors'},
        {id: 3, description: 'Compact tractors'},
        {id: 4, description: 'Utility tractors'},
        {id: 5, description: 'Argicultural tractors'}
    ],
    makes: [
        {id: 0, description: 'John Dere'},
        {id: 1, description: 'Bobcat'},
        {id: 2, description: 'Apollo'},
        {id: 3, description: 'Leyland'},
        {id: 4, description: 'Zetor'},
        {id: 5, description: 'Sonalike'},
        {id: 6, description: 'Terraplane'},
    ],
    models: [
        {id: 0, description: 'Crystal 170 HD'},
        {id: 1, description: 'DI-75'},
        {id: 2, description: '154'},
        {id: 3, description: '3035D'},
        {id: 4, description: '8R 340'},
        {id: 5, description: 'CT450'},
        {id: 6, description: '8R 280'},
        {id: 7, description: '454'},
        {id: 8, description: 'MPV-20'},
        {id: 9, description: '7R 230'}
    ],
    years: [],
    conditions: [
        {id: 0, description: 'Needs TLC'},
        {id: 1, description: 'Good'},
        {id: 2, description: 'Excellent'}
    ]
}

for (let i = 0; i < 23; i++) {
    storeObject.years.push('20' + i.toString().padStart(2, '0'))
}
 
export default storeObject;