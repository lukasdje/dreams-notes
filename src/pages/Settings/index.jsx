import "../../components/Content/Content.scss"
import React from "react"

export default function Content() {
    return (
        <div className="Content">
            <div className="contentGlobal">
                <div className="contentTitle">
                    <h1>Settings</h1>
                    <p>Detalhes dos projetos</p>
                </div>
                <div className="contentButton">
                    <button type="submit"><i class="fas fa-pen"></i> Editar um projeto</button>
                    <button type="submit"><i class="fas fa-plus"></i> Criar novo projeto</button>
                </div>
            </div>
        </div>
    )
}