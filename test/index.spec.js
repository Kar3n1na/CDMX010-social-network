// importamos la funcion que vamos a testear
import { postPage, savePost} from '../src/post';

describe('postPage', () => {
  it('debería ser una función', () => {
    expect(typeof postPage).toBe('function');
  });
});
//TO contain, para revisar que un array contiene tal o cual cosa 
describe('el valor que se guarda en en LS sea un string', () => {
  it('debería ser un string', () => {
    expect(typeof savePost).toBe('object');
  });
});
//TO contain, para revisar que un array contiene tal o cual cosa 
describe('datos almacenador en el array que guarda los post', () => {
  it('debere contener un key llamado post', () => {
    expect(crearItem).toContain('post');
  });
}); 
//funcion de Jest que simula un click
//crear DOM en la prueba 