import React from 'react'

const Loading = () => {
    return (
        <div className='container text-center' style={{marginTop: '200px', marginBottom: '200px'}}>
            <div class="spinner-border text-primary" role="status" style={{ width: '7rem', height: '7rem' }}>
                <span class="sr-only"></span>
            </div>

            <div className="h1 mt-5">
                로딩중이에요
            </div>
        </div>
    )
}

export default Loading