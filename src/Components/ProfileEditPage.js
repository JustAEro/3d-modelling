

import Header from "./Header";
import "./ProfileEditPage.scss"

export default function ProfileEditPage() {
    return (
        <div className="profile-edit-page">
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

            <div className="profile-edit-data">
                <div class="card-body">
				    <div class="row mb-3">
					    <div class="col-sm-3">
						    <h6 class="mt-2">Full Name</h6>
					    </div>
				        <div class="col-sm-9 text-secondary">
					        <input type="text" class="form-control" value="John Doe" />
				        </div>
				</div>

				<div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mt-2">Email</h6>
					</div>
				    <div class="col-sm-9 text-secondary">
						<input type="text" class="form-control" value="john@example.com" />
					</div>
				</div>

				<div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mt-2">Phone</h6>
					</div>
					<div class="col-sm-9 text-secondary">
						<input type="text" class="form-control" value="(239) 816-9029" />
					</div>
				</div>

				<div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mt-2">Mobile</h6>
					</div>
					<div class="col-sm-9 text-secondary">
						<input type="text" class="form-control" value="(320) 380-4539" />
					</div>
				</div>

				<div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mt-2">Address</h6>
					</div>
					<div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="Bay Area, San Francisco, CA" />
					</div>
				</div>

				<div class="row">
					<div class="col-sm-3"></div>
					<div class="col-sm-9 text-secondary">
						<input style={{color:"#ffffff",backgroundColor:"#C25200"}} type="button" class="btn px-4" value="Сохранить изменения" />
					</div>
				</div>
            </div>

            </div>
        </div>
    );
}