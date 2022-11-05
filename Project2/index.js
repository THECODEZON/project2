console.log("this is index js");
function Book (title , authore, type){
    this.name = name;
    this.author = authore;
    this.type = type;
}

function Display(){

}
Display.prototype.add = function(book){
console.log('Adding to UI');
tableBody = document.getElementById('tableBody');
let uiString = `<tr>
         
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
</tr>`;
tableBody.innerHTML += uiString;


}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function(book){
    if (book.name.length<2 || book.author.length<2);
    
    display.prototype.sj = function(){

    }
    
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have submitted library form');
    let name = document.getElementById;ementById('bookName').value;
    let author = document.getElementById;ementById('author').value;
    
    fiction, programing, design

    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('programing');
    let design = document.getElementById('design');
let type
    if (fiction.checked){
        type= fiction.value;
    }
    else if (programing.checked){
        type= programing.value;
    
    }
    else if(design.checked){
        type=design.value
    }
    
    

   
    
    let book = new Book(name, author, type);    
    

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('succcess')
    }
    else{
        display.show('error')
    }
    e.preventDefault();
}