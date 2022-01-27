import './App.css';
import DatosFacturaLUZ from './components/LUZ/DatosFacturaLUZ/DatosFacturaLUZ';
import DatosFacturaGAS from './components/GAS/DatosFacturaGAS/DatosFacturaGAS';



const App = () => {
  return (
    <div className="App">
     <DatosFacturaLUZ />
     <DatosFacturaGAS />
    </div>
  );
}
export default App;
