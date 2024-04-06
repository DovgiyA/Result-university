import { Suspense, lazy } from "react"


export const LazyElement = ({name}) => {

    const Element = lazy(() => import(`../${name}`));

    return (
        <Suspense>
            <Element />
        </Suspense>
    );
}