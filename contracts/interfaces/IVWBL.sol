// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @dev Interface of the VWBL NFT as defined in the
 * https://github.com/VWBL-protocol/contracts/ERC721/VWBL.sol
 */
interface IVWBL {
    /**
     * @notice Get VWBL Fee
     */
    function getFee() external view returns (uint256);
    
    /**
     * @notice Mint NFT, grant access feature and register access condition of digital content.
     * @param _getKeyURl The URl of VWBL Network(Key management network)
     * @param _royaltiesPercentage Royalty percentage of NFT
     * @param _documentId The Identifier of digital content and decryption key
     */
    function mint(
        string memory _getKeyURl, 
        uint256 _royaltiesPercentage, 
        bytes32 _documentId
    ) external returns (uint256);
    
    /**
     * @notice Get minter of NFT by tokenId
     * @param tokenId The Identifier of NFT
     */
    function getMinter(uint256 tokenId) external view returns (address);
}