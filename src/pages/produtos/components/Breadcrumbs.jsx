import { useEffect, useState } from "react";
import BreadcrumbsService from "../../../services/BreadcrumbsService";

function BreadcrumbItem({ link, descricao }) {
    return (
        <li className="breadcrumbs__item">
            { link ?
                <>
                    <a className="breadcrumbs__link" href={link}>{descricao}</a>
                    <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
                </>
                :
                <span className="breadcrumbs__link">{descricao}</span>
            }
        </li>
    );
}

function Breadcrumbs() {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    // eslint-disable-next-line
    useEffect(() => carregarBreadcrumbs(), []);

    function carregarBreadcrumbs() {
        // setCarregando(true);
        BreadcrumbsService.listar()
            .then(b => setBreadcrumbs(b))
            .finally(
                // () => setCarregando(false)
            );
    }

    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    {breadcrumbs.map(b => <BreadcrumbItem key={b.id} link={b.link} descricao={b.descricao} />)}
                </ol>
            </nav>
        </section>
    )
}

export default Breadcrumbs;