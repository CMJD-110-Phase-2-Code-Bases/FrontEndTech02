export const AJAX = ()=>{

     // AJAX Handle

     const ajaxDataLoad = ()=>{
      const xhr = new  XMLHttpRequest();
      xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

      xhr.onload = ()=>{
          if(xhr.status === 200){
              console.log(xhr.responseText)
          }
      };
      xhr.onerror = () =>{
          console.log("Request Failed")
      };

      xhr.send();
     }

     const ajaxDataLoadViaFetch = ()=>{
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then(data =>{
             console.log(data.json())
         })
         .catch(error => console.error(error));
     }




    return(
        <>
        <h1> Hello AJAX </h1>
        <button onClick={ajaxDataLoad}>Get Data Pure AJAX</button>
        <button onClick={ajaxDataLoadViaFetch}>Get Data Fetch</button>
        </>
    )
}