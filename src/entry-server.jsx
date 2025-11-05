import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {MetaContext} from './components/common/MetaContext';
import App from './App';

export function render(url) {
    let meta = {};
    const schemas = [];

    const updateMeta = (newMeta) => {
        meta = newMeta;
    };
    const addSchema = (newSchema) => {
        schemas.push(newSchema);
    };

    const appHtml = ReactDOMServer.renderToString(
        <MetaContext.Provider value={{meta, schemas, updateMeta, addSchema}}>
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </MetaContext.Provider>
    );

    return {appHtml, meta, schemas};
}

