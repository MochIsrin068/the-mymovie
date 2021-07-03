
import Skeleton from 'react-loading-skeleton'

const CONTENT = {
    LIST : 1,
    DETAIL : 2,
}

const Loader = ({content = CONTENT.LIST}) => {
    switch (content) {
        case CONTENT.LIST:
            return (
                <div className="loader --list">
                    <Skeleton height={200} />
                    <div>
                        <Skeleton count={2}/>
                    </div>
                </div>
            )        
        case CONTENT.DETAIL :
                return (
                    <div className="loader --detail">
                        <div className="loader__info">
                            <div>
                                <Skeleton />
                            </div>
                            <div>
                                <Skeleton count={2}/>
                            </div>
                        </div>
                        <div className="loader__story">
                            <div>
                                <Skeleton/>
                            </div>
                            <div>
                                <Skeleton count={3}/>
                            </div>
                        </div>
                    </div>
                )
    }   
}

export default Loader