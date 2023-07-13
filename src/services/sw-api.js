export default async function getAllStarships(){
    try{
        const response = await fetch('https://swapi.dev/api/starships/?format=json')
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
    }
}

export async function getNextPage(props) {
    try{
        const nextPage = props.next
        const newPageRes = (await fetch(nextPage))
        const newPageData = await newPageRes.json();
        return newPageData;
    }catch(e){
    }

}