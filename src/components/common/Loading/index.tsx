import * as C from './styles';

export const Loading = () => {
    return (
        <C.Container>
            <div className="loadingArea">
                <img src="/assets/images/apple-logo.png" alt="logo" />
                
                <img className="loading" src="/assets/images/loading.gif" alt="loading" />
            </div>
        </C.Container>
    );
}