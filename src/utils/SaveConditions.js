function saveConditions(person){

    if(person.barcode.length===0||person.name.length===0||person.url.length===0||person.description.length===0||person.price.length===0||person.stock.length===0){
        alert("Kérem minden mezőt töltsön ki");
        return false;
    }

    if(person.barcode<0||person.price<0||person.stock<0){
        alert("Csak egész számot adjon meg")
        return false;
    }

    return true;
}

export default saveConditions