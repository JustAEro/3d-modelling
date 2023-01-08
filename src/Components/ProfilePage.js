import { Link } from "react-router-dom";

import Header from "./Header";
import "./ProfilePage.scss"

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <Header />
            <div className="profile-card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">8-800-555-35-35</p>
                      <button style={{color:"#ffffff",backgroundColor:"#000000"}} class="btn">Добавить в избранное</button>
                    </div>
                  </div>
                </div>
            </div>

            <div className="profile-data">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Имя</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            John
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Фамилия</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Doe
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        fip@jukmuh.al
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        (239) 816-9029
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        (320) 380-4539
                        </div>
                    </div>
                    <hr/>
                    
                    <div class="row">
                        <div class="col-sm-12">
                        <Link className="btn" style={{color:"#ffffff",backgroundColor:"#C25200"}} to="/edit-profile">Изменить профиль</Link>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}