import { createStore } from './core.js'
import reducer from './reducer.js'
import withLogger from './logger.js'

const { attach, conect, dispatch } = createStore(withLogger(reducer));

window.dispatch = dispatch;
export {
    attach,
    conect,
}