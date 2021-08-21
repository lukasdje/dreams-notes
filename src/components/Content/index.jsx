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
                    <button type="submit"><i class="far fa-pencil"></i> Editar um projeto</button>
                    <button type="submit"><i class="fas fa-plus"></i> Criar novo projeto</button>
                </div>
            </div>
            <div className="contentIndicadores">
                <div className="projects">
                    <div><i class="fas fa-project-diagram"></i></div>
                    <h3>9</h3>
                    <p>Projetos criados</p>
                </div>
                <div className="concluido">
                    <div><i class="fal fa-trophy"></i></div>
                    <h3>6</h3>
                    <p>Concluídos</p>
                </div>
                <div className="pendentes">
                    <div><i class="fas fa-check-double"></i></div>
                    <h3>123</h3>
                    <p>Pendentes</p>
                </div>
                <div className="percentual">
                    <div><i class="fas fa-chart-line"></i></div>
                    <h3>94%</h3>
                    <p>Percentual</p>
                </div>
            </div>
        </div>
    )
}