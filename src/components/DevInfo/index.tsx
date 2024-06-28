/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const DevInfo = () => {
    return (
        <div>
            <h2>Prefunded Accounts</h2>
            <p>The local devnet setup funds a dev account for you by default, as well as setting up a Kettle for you to submit Confidential Compute Requests to when interacting with your contracts. Your local address and the Kettle created for your local devnet are listed below:</p>
            <h4>Local dev account</h4>
            <p>Address:</p>
            <div className="language-bash codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block" style={{'--prism-color': '#393A34','--prism-background-color': '#f6f8fa'}}>
                <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                    <pre className="prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar" style={{'color': 'rgb(57, 58, 52)', 'backgroundColor': 'rgb(246, 248, 250)'}}>
                        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            0xBE69d72ca5f88aCba033a063dF5DBe43a4148De0
                        </code>
                        <div className="buttonGroup_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"><button type="button" aria-label="Copy code to clipboard" title="Copy" className="clean-btn"><span className="copyButtonIcons_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module" aria-hidden="true"><svg viewBox="0 0 24 24" className="copyButtonIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg><svg viewBox="0 0 24 24" className="copyButtonSuccessIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></span></button></div>
                    </pre>
                </div>
            </div>
            <p>Private key:</p>
            <div className="language-bash codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block" style={{'--prism-color': '#393A34','--prism-background-color': '#f6f8fa'}}>
                <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                    <pre className="prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar" style={{'color': 'rgb(57, 58, 52)', 'backgroundColor': 'rgb(246, 248, 250)'}}>
                        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            0x91ab9a7e53c220e6210460b65a7a3bb2ca181412a8a7b43ff336b3df1737ce12
                        </code>
                        <div className="buttonGroup_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"><button type="button" aria-label="Copy code to clipboard" title="Copy" className="clean-btn"><span className="copyButtonIcons_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module" aria-hidden="true"><svg viewBox="0 0 24 24" className="copyButtonIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg><svg viewBox="0 0 24 24" className="copyButtonSuccessIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></span></button></div>
                    </pre>
                </div>
            </div>
            <h4>Local kettle account</h4>
            <p>Address:</p>
            <div className="language-bash codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block" style={{'--prism-color': '#393A34','--prism-background-color': '#f6f8fa'}}>
                <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                    <pre className="prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar" style={{'color': 'rgb(57, 58, 52)', 'backgroundColor': 'rgb(246, 248, 250)'}}>
                        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            0xB5fEAfbDD752ad52Afb7e1bD2E40432A485bBB7F
                        </code>
                        <div className="buttonGroup_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"><button type="button" aria-label="Copy code to clipboard" title="Copy" className="clean-btn"><span className="copyButtonIcons_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module" aria-hidden="true"><svg viewBox="0 0 24 24" className="copyButtonIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg><svg viewBox="0 0 24 24" className="copyButtonSuccessIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></span></button></div>
                    </pre>
                </div>
            </div>
            <p>Private key:</p>
            <div className="language-bash codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block" style={{'--prism-color': '#393A34','--prism-background-color': '#f6f8fa'}}>
                <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                    <pre className="prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar" style={{'color': 'rgb(57, 58, 52)', 'backgroundColor': 'rgb(246, 248, 250)'}}>
                        <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                            0x6c45335a22461ccdb978b78ab61b238bad2fae4544fb55c14eb096c875ccfc52
                        </code>
                        <div className="buttonGroup_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"><button type="button" aria-label="Copy code to clipboard" title="Copy" className="clean-btn"><span className="copyButtonIcons_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module" aria-hidden="true"><svg viewBox="0 0 24 24" className="copyButtonIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg><svg viewBox="0 0 24 24" className="copyButtonSuccessIcon_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-CopyButton-styles-module"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></span></button></div>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default DevInfo;