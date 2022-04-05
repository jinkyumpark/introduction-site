import React from 'react'

const Loading = () => {
    return (
        <div className='container mt-5 mb-5 text-center'>
            <div class="spinner-border text-primary" role="status" style={{ width: '7rem', height: '7rem' }}>
                <span class="sr-only"></span>
            </div>

            <div className="h1 mt-5">
                데이터를 불러오고 있어요
            </div>
        </div>
    )
}

export default Loading