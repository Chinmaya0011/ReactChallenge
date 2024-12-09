function outerScope(){
    const outerVar="Hi i am Chinmaya Kumar";

    function innerScope(){
        console.log(outerVar);
    }
    return innerScope;
}
const closures=outerScope();
closures();