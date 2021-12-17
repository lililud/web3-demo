// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title FeatureToggle
 * @dev Store & retrieve value in a variable
 */
contract FeatureToggle is AccessControl, Ownable {

    struct Toggle {
        string name;
        uint256 toggleId;
        bool isEnabled;
    }

    mapping(uint256 => Toggle) public toggleIdToToggle;

    bytes32 public constant UPDATE_TOGGLE_ROLE = keccak256("UPDATE_TOGGLE_ROLE");

    constructor(address[] memory permissionedUsers) {
        // takes in list of permissionedUsers wallet address's
        for (uint256 i = 0; i < permissionedUsers.length; ++i) {
            _setupRole(UPDATE_TOGGLE_ROLE, permissionedUsers[i]);
        }
        // giving wallet that deployed contract with permissions
        _setupRole(UPDATE_TOGGLE_ROLE, msg.sender);
    }

    function updateToggle(uint256 toggleId, bool isEnabled, string memory name) public {
        // Check that the calling account has the UPDATE_TOGGLE role
        require(hasRole(UPDATE_TOGGLE_ROLE, msg.sender), "Caller is not permissioned to update toggle");

        toggleIdToToggle[toggleId] = Toggle({
            name: name,
            toggleId: toggleId,
            isEnabled: isEnabled
            });
    }

    function getIsEnabled(uint256 toggleId) public view returns (bool){
        // only permissioned wallets can view
        require(hasRole(UPDATE_TOGGLE_ROLE, msg.sender), "Caller is not permissioned to view toggle");
        return toggleIdToToggle[toggleId].isEnabled;
    }
}