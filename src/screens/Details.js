import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Details(){
    var {id} = useParams();
    const history = useHistory();

    const goToBook =()=>{
        history.push('/Book');
    };

    const [movieDetails, setMovieDetails] = useState({
            ID            :   0,
            Title         :   "",
            Discription   :   "",
            Cast          :   [],
            Genre         :   "",
            url           :   "",
            img           :   ""    
    });

    useEffect(()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () =>{
            if(helper.readyState == 4 && 
                helper.status == 200){
                    var dataReceived = JSON.parse(helper.responseText);
                    setMovieDetails(dataReceived);
                }
        };
        helper.open("GET", `http://localhost:3000/Data/${id}.json`);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send();
    }, []);


    return (<div className='table-responsive'> 
              <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td>
                        <h3 className='alert alert-warning'>
                            {movieDetails.Title}
                        </h3>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-justify'>
                            <p>
                            {movieDetails.Description}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-justify'>
                           Genre:{movieDetails.Genre} <br></br> <br></br> 
                           Actors: <ul>
                                        {movieDetails.Cast.map((actor)=>{
                                              return <li>
                                                        {actor}
                                                     </li>  
                                        })}
                                   </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-justify'>
                            <button onClick={goToBook} className="btn btn-primary">Book Tickets For This Movie</button>
                            <br></br><br></br>
                        <iframe width="560" height="315" src={movieDetails.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>)
}

export default Details; 