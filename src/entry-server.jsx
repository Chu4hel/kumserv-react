import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {MetaContext} from './components/common/MetaContext';
import App from './App';

export function render(url) {
    let meta = {};

    const appHtml = ReactDOMServer.renderToString(
        <MetaContext.Provider value={{
            meta, setMeta: (newMeta) => {
                meta = newMeta;
            }
        }}>
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </MetaContext.Provider>
    );

    return {appHtml, meta};
}

