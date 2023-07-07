import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom';

function Launcher(){
//    return <h1>Welcome To Movie App</h1>
    const history = useHistory();
    const GoToDetails = (args)=>{
        var movieId = args.target.id;
        history.push('/details/'+movieId);
    }
   return (<>
   <div className="container marketing">
        <div className="row">
            <div className="col-lg-4">
                <img className="img-rectangle" src="./Images/Bholla.jpeg" alt="Generic placeholder image" width="240" height="300" id="1" onClick={GoToDetails}/>
                <h2>Bholaa</h2>
                <p>After 10 years of imprisonment, Bholaa is finally going home to meet his young daughter. However, his journey is not so simple as he soon faces a pathway full of crazy obstacles, with death lurking around every corner.</p>
                <p><a className="btn btn-default" role="button" id="1" onClick={GoToDetails}>View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img className="img-rectangle" src="./Images/Adipurush.jpeg" alt="Generic placeholder image" width="240" height="300" id="2" onClick={GoToDetails}/>
                <h2>Adipurush</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><a className="btn btn-default" role="button" id="2" onClick={GoToDetails}>View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img className="img-rectangle" src="./Images/GOG.jpg" alt="Generic placeholder image" width="240" height="300" id="3" onClick={GoToDetails}/>
                <h2>Guardian Of The Galaxy III</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-default" role="button" id="3" onClick={GoToDetails}>View details &raquo;</a></p>
            </div>
        </div>
    </div>
   </>);
}

export default Launcher;