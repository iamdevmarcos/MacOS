import * as C from './styles';

export const Loading = () => {
    return (
        <C.Container>
            <div className="loadingArea">
                <img src="/assets/images/apple-logo.png" alt="logo" />
                <p>Loading</p>
            </div>
        </C.Container>
    );
}