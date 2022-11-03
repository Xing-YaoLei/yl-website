<template>
    <div class="SlideBar">
        <div class="head">
            <img
                class="headImg"
                src="http://oss.oh-undefined.com/xianluo.png"
            />
            <div class="headRight">
                <div class="website">YaoLeiWebsite</div>
                <p>一些自己的小点子</p>
            </div>
        </div>
        <ul class="slideNav">
            <li v-for="item in slideNavList" :key="item.icon">
                <router-link class="slideNavItem" :to="item.navLink">
                    <span :class="'iconfont ' + item.icon"></span>
                    <span>{{ item.slideNavName }}</span>
                </router-link>
            </li>
        </ul>
        <ul class="postNav">
            <li v-for="item in postNavList" :key="item.icon">
                <router-link class="postNavItem" :to="item.navLink">
                    <span :class="'iconfont ' + item.icon"></span>
                    <span>{{ item.postNavName }}</span>
                </router-link>
            </li>
            <li>
                <a class="postNavItem" href="http://press.oh-undefined.com">
                    <span class="iconfont icon-shouye"></span>
                    <span>Press</span>
                </a>
            </li>
        </ul>
        <div class="addPost">
            <span class="iconfont icon-tianjia"></span>
            <span>Create New Post</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
const slideNavList = shallowRef([
    {
        slideNavName: 'Dashboard',
        icon: 'icon-shouye',
        navLink: '/index',
    },
    {
        slideNavName: '文章',
        icon: 'icon-liebiao7',
        navLink: '/posts',
    },
    {
        slideNavName: '设置',
        icon: 'icon-shezhi',
        navLink: '/setting',
    },
]);
const postNavList = shallowRef([
    {
        postNavName: 'Published',
        icon: 'icon-shouye',
        navLink: '/publish',
    },
    {
        postNavName: 'Profile',
        icon: 'icon-shouye',
        navLink: '/profile',
    },
    {
        postNavName: 'Code',
        icon: 'icon-shouye',
        navLink: '/code',
    },
]);
</script>

<style lang="scss" scoped>
@import '@/assets/base.scss';
.SlideBar {
    @include flexble(flex-start, flex-start, column);
    width: 200px;
    background-color: #fff;
    height: 720px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 40px 20px;
    border-right: 2px solid #eaecef;
}
.router-link-active {
    font-weight: 500;
}
.head {
    @include flexble(center, center, row);
    height: 50px;
    padding-bottom: 30px;
}
.headImg {
    width: 50px;
    height: 50px;
    margin-right: 8px;
}
.headRight {
    font-size: 14px;
    :first-child {
        font-size: 18px;
    }
    :last-child {
        font-size: 12px;
        margin-top: 5px;
    }
}
.slideNav {
    display: flex;
    width: 100%;
    flex-direction: column;
    &::after {
        content: '';
        height: 2px;
        background: #eaecef;
        margin-top: 40px;
    }
    .slideNavItem {
        @include flexble(flex-start, center, row);
        width: 100%;
        height: 40px;
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            font-weight: 500 !important;
        }
    }
    .slideNavItem .iconfont {
        font-size: 22px;
        margin: 0 8px;
    }
}
.postNav {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    .postNavItem {
        @include flexble(flex-start, center, row);
        width: 100%;
        height: 40px;
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;
        &:hover {
            font-weight: 500 !important;
        }
        .iconfont {
            font-size: 22px;
            margin: 0 8px;
        }
    }
    &::after {
        content: '';
        height: 2px;
        background: #eaecef;
        margin-top: 30px;
    }
}
.addPost {
    @include flexble(flex-start, center, row);
    margin-top: 30px;
    height: 40px;
    cursor: pointer;
    .iconfont {
        font-size: 20px;
        margin: 0 8px;
    }
    :last-child {
        font-size: 14px;
    }
    &:hover {
        font-weight: 500 !important;
    }
}
</style>
