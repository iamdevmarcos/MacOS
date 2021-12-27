import * as C from './styles';

export const Window = () => {
    return (
        <C.Container>
            <C.Top>
                <div
                    style={{backgroundColor:'#FF6059'}}
                >
                    <img src="/assets/images/icons/window/close.png" alt="" />
                </div>
                <div
                    style={{backgroundColor:'#FFBE30'}}
                >
                    <img src="/assets/images/icons/window/minimize.png" alt="" />
                </div>
            </C.Top>
        </C.Container>
    );
}