
                             import { Component } from 'react';
 import { arWebDesigner } from '@mescius/activereportsnet-designer';
 import { createViewer } from '@mescius/activereportsnet-viewer';
 import "@mescius/activereportsnet-designer/dist/web-designer.css";
 import "@mescius/activereportsnet-viewer/dist/jsViewer.min.css";
 import './custom.css';
 import './App.css';
 export default class App extends Component {
     constructor() {
         super();
     }
     componentDidMount() {
         console.log("componentDidMount");
             arWebDesigner.create('#ar-web-designer', {
                 rpx: { enabled: true },
                 appBar: { openButton: { visible: true } },
                 data: { dataSets: { visible: true, canModify: true }, dataSources: { canModify: true } },
                 preview: {
                     openViewer: (options) => {
                         if (this.viewer) {
                             this.viewer.openReport(options.documentInfo.id);
                             return;
                         }
                         this.viewer = createViewer({
                             element: '#' + options.element,
                             reportService: {
                                 url: 'api/reporting',
                             },
                             reportID: options.documentInfo.id
                         });
                     }
                 }
             })
     }
     componentWillUnmount() {
         console.log("componentWillUnmount");
         this.viewer?.destroy();
         arWebDesigner.destroy('#ar-web-designer');
     }
     render() {
         return (
             <div id="ar-web-designer" className="ar-web-designer"><span className="ar-web-designer__loader"><b>AR WebDesigner</b></span></div>
         );
     }
 }

                        