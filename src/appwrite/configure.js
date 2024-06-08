import config from "../config/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	storage;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.storage = new Storage(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{ title, content, featuredImage, status, userId }
			);
		} catch (error) {
			console.log("Appwrite Service :: createPost :: ", error);
			throw error;
		}
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
		} catch (error) {
			console.log("Appwrite Service :: getPost :: ", error);
			throw error;
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{ title, content, featuredImage, status }
			);
		} catch (error) {
			console.log("Appwrite Service :: updatePost :: ", error);
			throw error;
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite Service :: deletePost :: ", error);
			throw error;
		}
	}

	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.log("Appwrite Service :: getPosts :: ", error);
			throw error;
		}
	}

	// file upload Services

	getFilePreview(fileId) {
		try {
			return this.storage.getFilePreview(config.appwriteBucketId, fileId);
		} catch (error) {
			console.log("Appwrite Service :: getFilePreview :: ", error);
			throw error;
		}
	}

	async uploadFile(file) {
		try {
			return await this.storage.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			console.log("Appwrite Service :: uploadFile :: ", error);
			throw error;
		}
	}

	async deleteFile(fileId) {
		try {
			await this.storage.deleteFile(config.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.log("Appwrite Service :: deleteFile :: ", error);
			throw error;
		}
	}
}

const service = new Service();
export default service;