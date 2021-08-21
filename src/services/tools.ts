const pickRandomColor=()=>{
    const colorArray=[
        'orange',
        'red',
        'green',
        'blue',
        'purple',
        'grey',
    ];

    const randomIndex = Math.floor(Math.random()*colorArray.length);

    return colorArray[randomIndex];

}

export {
    pickRandomColor
}
