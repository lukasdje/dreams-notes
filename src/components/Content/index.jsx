import "./Content.scss"
import React from "react"

export default function Content() {
    return (
        <div className="Content">
            <div className="contentGlobal">
                <div className="contentTitle">
                    <h1>Dashboard</h1>
                    <p>Detalhes dos projetos</p>
                </div>
                <div className="contentButton">
                    <button type="submit"><i class="fas fa-pen"></i> Editar um projeto</button>
                    <button type="submit"><i class="fas fa-plus"></i> Criar novo projeto</button>
                </div>
            </div>
            <div className="contentIndicadores">
                <div>
                    <h3>9</h3>
                    <p>Projetos criados</p>
                </div>
                <div>
                    <h3>6</h3>
                    <p>Concluídos</p>
                </div>
                <div>
                    <h3>123</h3>
                    <p>Pendentes</p>
                </div>
                <div>
                    <h3>94%</h3>
                    <p>Percentual</p>
                </div>
            </div>
        </div>
    )
}