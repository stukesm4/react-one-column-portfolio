"use strict";

const React = require('react');
const TeamMember = require('./teamMember');

class Team extends React.Component {
    constructor(){
        super();
        this.teamMemberData = [
            {name:"Marshall Stukes", title:"CEO", description:"What does this team member to? Keep it short! This is also a great spot for social links!"},
            {name:"Marshall Stukes", title:"CTO", description:"What does this team member to? Keep it short! This is also a great spot for social links!"},
            {name:"Marshall Stukes", title:"COO", description:"What does this team member to? Keep it short! This is also a great spot for social links!"}
        ];
    }

    _getTeamMembers() {
        return (
            this.teamMemberData.map((teamMember) => {
                return (
                    <TeamMember name={teamMember.name} title={teamMember.title} description={teamMember.description} />
                );
            })
        );
    }

    render() {
        const teamMembers = this._getTeamMembers();
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="page-header">Our Team</h2>
                </div>
                {teamMembers}
            </div>
        );
    }
}

module.exports = Team;