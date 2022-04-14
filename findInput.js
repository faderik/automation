function loop(e){
    if(e.children)
        for(let i=0; i<e.children.length; i++) {
            let c = e.children[i], n = c.getAttribute('name');
            if(n) console.log(`Input ${i} : ${n}`);
            loop(e.children[i]);
         }
}; 

loop(document.body);

// Try submit form with dummy data -> open network tab