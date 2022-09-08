let divQueries = document.getElementById('queries');
let documentFragment = document.createDocumentFragment();

const crearNodos = (id_usuario, nombre, apellido, usuario, clave) => {
    const nodoPadre = document.createElement('DIV');
    const idF = document.createElement('H3');
    const nombreF = document.createElement('P');
    const apellidoF = document.createElement('P');
    const usuarioF = document.createElement('P');
    const claveF = document.createElement('P');

    idF.textContent = id_usuario;
    nombreF.textContent = nombre;
    apellidoF.textContent = apellido;
    usuarioF.textContent = usuario;
    claveF.textContent = clave;

    nodoPadre.appendChild(idF);
    nodoPadre.appendChild(nombreF);
    nodoPadre.appendChild(apellidoF);
    nodoPadre.appendChild(usuarioF);
    nodoPadre.appendChild(claveF);

    return nodoPadre;
}

const funcionAsincrona = async () => {
    try {
        const respuesta = await fetch('http://localhost:9090/db/users');
        if (!respuesta.ok) {
            throw new Error(`Error! status: ${respuesta.status}`);
        }

        const json = await respuesta.json()
        for(let dato of json) {
            console.log(dato);

            //const contenido = crearNodos(dato.id_usuario, dato.nombre, dato.apellido, dato.usuario, dato.clave);

            const divPrincipal = document.createElement('DIV');
            divPrincipal.style = `display: flex; flex-flow: column nowrap`;

            const divUno = document.createElement('DIV');
            divUno.style = `display: flex; flex-grow: 5; width: 100%; justify-content: center;`;
            const divDos = document.createElement('DIV');
            divDos.style = `display: flex; flex-wrap: nowrap; justify-content: space-evenly; margin: 0.5rem; text-align:center;`;
            const divTres = document.createElement('DIV');
            divTres.style = `display: flex; flex-wrap: nowrap; justify-content: space-evenly; margin: 0.5rem; text-align: center;`;

            const idF = document.createElement('H4');
            idF.textContent = dato.id_usuario;
            divUno.appendChild(idF);

            const nombreF = document.createElement('P');
            const apellidoF = document.createElement('P');
            nombreF.textContent = dato.nombre;
            apellidoF.textContent = dato.apellido;
            divDos.appendChild(nombreF);
            divDos.appendChild(apellidoF);

            const usuarioF = document.createElement('P');
            const claveF = document.createElement('P');
            usuarioF.textContent = dato.usuario;
            claveF.textContent = dato.clave;
            divTres.appendChild(usuarioF);
            divTres.appendChild(claveF);

            divPrincipal.appendChild(divUno);
            divPrincipal.appendChild(divDos);
            divPrincipal.appendChild(divTres);

            //documentFragment.appendChild(contenido);
            
            documentFragment.appendChild(divPrincipal);
        }
        divQueries.appendChild(documentFragment);
    }
    catch(err) {
        console.log(err);
    }
}

funcionAsincrona();
