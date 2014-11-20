class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
			render json: @post.errors.full_messages, status: 422
    end
  end
  
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors.full_messages }, status: 422
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end
  
  def index
    @posts = Post.all
    render json: @posts
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
