export default function EachCategory({category, changeActive, active}){
    return (<>{active==category ? 
        <button className="hover:border-b border-black border-b block h-6 box-border mt-4">{category}</button> :
        <button onClick={()=>changeActive(category)} className="hover:border-b border-black block h-6 box-border mt-4">{category}</button>
        }</>
        
    );
}