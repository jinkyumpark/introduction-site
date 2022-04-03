import React from 'react'
import {BsArrowRight as DetailIcon} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import algoLogo from '../../../images/cs-algo.png'

const CsCard = () => {
  return (
    <div class="card mb-4">
        <div class="row no-gutters">

            <div class="col-3 col-md-2 text-center ms-2 me-2">
                <img class="card-img rounded-circle p-2" src={algoLogo} alt="Algorithms"/>
                <div className="h5 text-center">알고리즘</div>
            </div>

            <div class="col-sm-7">
                <div class="mt-4">
                    <h5 class="card-title">정렬 알고리즘 총 정리</h5>
                    <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CsCard