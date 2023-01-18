const itemRef = document.querySelectorAll('.item');
    console.log(`Number of categories: ${itemRef.length}`);

    for(let item of itemRef) {
        const titleRef = item.querySelector('h2');
        console.log(`Category: ${titleRef.textContent}`);

        const itemInCategoryRef = item.querySelectorAll('li');
        console.log(`Elements: ${itemInCategoryRef.length}`);
    }