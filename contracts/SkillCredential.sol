// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SkillCredential {

    struct Credential {
        address user;
        string skill;
        uint score;
        uint timestamp;
    }

    Credential[] public credentials;

    event CredentialIssued(
        address indexed user,
        string skill,
        uint score,
        uint timestamp
    );

    function issueCredential(
        address user,
        string memory skill,
        uint score
    ) public {

        credentials.push(
            Credential(
                user,
                skill,
                score,
                block.timestamp
            )
        );

        emit CredentialIssued(
            user,
            skill,
            score,
            block.timestamp
        );
    }

    function getCredential(uint index)
        public
        view
        returns(
            address,
            string memory,
            uint,
            uint
        )
    {
        Credential memory c = credentials[index];

        return (
            c.user,
            c.skill,
            c.score,
            c.timestamp
        );
    }
}